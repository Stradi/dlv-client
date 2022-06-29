import { Dailymotion, Vimeo, YouTube } from "../components/SpecialText";

const providerToBrandName = (provider: string) => {
  switch (provider.toLowerCase()) {
    case "youtube":
      return "YouTube";
    case "dailymotion":
      return "Dailymotion";
    case "vimeo":
      return "Vimeo";
  }
};

const providerToSpecialTextComponent = (provider: string) => {
  switch (provider.toLowerCase()) {
    case "youtube":
      return <YouTube />;
    case "dailymotion":
      return <Dailymotion />;
    case "vimeo":
      return <Vimeo />;
  }
};

export { providerToBrandName, providerToSpecialTextComponent };
