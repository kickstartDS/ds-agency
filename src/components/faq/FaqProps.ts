/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * The questions and answers in the FAQ section
 *
 * @minItems 1
 */
export type Questions = [
  {
    question: Question;
    answer: Answer;
  },
  ...{
    question: Question;
    answer: Answer;
  }[]
];
/**
 * The question
 */
export type Question = string;
/**
 * The answer to the question
 */
export type Answer = string;

/**
 * Component used to display a FAQ section
 */
export interface FAQProps {
  questions: Questions;
}
