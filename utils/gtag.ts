export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const pageView = (url) => {
  if (process.env.NODE_ENV === "production") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
    console.log("Sent pageview");
  }
};

export const event = ({ action, category, label, value }) => {
  if (process.env.NODE_ENV === "production") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
