/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ButtonProps {
  /**
   * Count Start
   * @default 0
   */
  count?: number;
}

export default class Button extends SvelteComponentTyped<ButtonProps, {}, {}> {}
