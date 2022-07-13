import {
  Dailymotion,
  Twitter,
  Vimeo,
  YouTube,
} from "../components/SpecialText";

const providerToBrandName = (provider: string) => {
  switch (provider.toLowerCase()) {
    case "youtube":
      return "YouTube";
    case "dailymotion":
      return "Dailymotion";
    case "vimeo":
      return "Vimeo";
    case "twitter":
      return "Twitter";
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
    case "twitter":
      return <Twitter />;
  }
};

export { providerToBrandName, providerToSpecialTextComponent };
