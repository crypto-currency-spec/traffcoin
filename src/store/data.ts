import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  data: {
    menu: {
      language: string;
      links: { link: string; text: string }[];
    };
    header: {
      title: string;
      subtitle: string;
      button: string;
    };
    reasons: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
      conclusion: string;
    };
    why_choose_us: {
      items: string[];
    };
    reviews: {
      title: string;
    };
    videoReviews: {
      title: string;
    };
    partners: {
      title: string;
    };
    paymentSystems: {
      title: string;
    };
    faqs: {
      title: string;
      questions: {
        question: string;
        answer: string;
      }[];
    };
  };
}

const initialState: InitialState = {
  data: {
    menu: {
      language: "",
      links: [{ link: "", text: "" }],
    },
    header: {
      title: "",
      subtitle: "",
      button: "",
    },
    reasons: {
      title: "",
      items: [
        {
          title: "",
          description: "",
        },
      ],
      conclusion: "",
    },
    why_choose_us: {
      items: [""],
    },
    reviews: {
      title: "",
    },
    videoReviews: {
      title: "",
    },
    partners: {
      title: "",
    },
    paymentSystems: {
      title: "",
    },
    faqs: {
      title: "",
      questions: [
        {
          question: "",
          answer: "",
        },
      ],
    },
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;
