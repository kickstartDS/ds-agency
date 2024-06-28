import {
  FC,
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useRef,
} from "react";

const HeadlineLevelContext = createContext<
  [initialLevel: number, isFirstHeadlineRef?: MutableRefObject<boolean>]
>([1]);

export const HeadlineLevelProvider: FC<PropsWithChildren> = ({ children }) => {
  const [parentInitialLevel, parentIsFirstHeadlineRef] =
    useContext(HeadlineLevelContext);

  /* @refresh reset */
  const isFirstHeadlineRef = useRef(true);
  const initialLevel =
    !parentIsFirstHeadlineRef || parentIsFirstHeadlineRef.current
      ? parentInitialLevel
      : parentInitialLevel + 1;

  // prevent first section without headlines to increase the headline leven
  // this component has to run _after_ the children to check if any headline was rendered
  const UpdateParent = useCallback<FC>(() => {
    if (parentIsFirstHeadlineRef?.current) {
      parentIsFirstHeadlineRef.current = isFirstHeadlineRef.current;
    }
    return null;
  }, []);

  return (
    <>
      <HeadlineLevelContext.Provider value={[initialLevel, isFirstHeadlineRef]}>
        {children}
      </HeadlineLevelContext.Provider>
      <UpdateParent />
    </>
  );
};

export const useHeadlineLevel = () => {
  const [initialLevel, isFirstHeadlineRef] = useContext(HeadlineLevelContext);
  if (isFirstHeadlineRef?.current) {
    isFirstHeadlineRef.current = false;
    return initialLevel;
  } else {
    return initialLevel + 1;
  }
};
