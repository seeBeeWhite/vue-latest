export namespace Shared {
  export namespace Enums {
    export enum DynamicSuffixCategory {
      YEAR = "year",
    }
  }

  export namespace Page {
    export interface Tab {
      title: string;
      to: string;
      isShow?: boolean;
    }

    export interface Slide {
      src: string;
      title: string;
      subTitle?: string;
      text: string;
    }

    export interface Portfolio {
      col: number;
      src: string;
      title: string;
      subTitle?: string;
      desc: string;
      price: number;
    }
  }
}
