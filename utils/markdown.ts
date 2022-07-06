import { remark } from "remark";
import headings from "remark-heading-id";
import html from "remark-html";

const markdownToHtml = async (markdown) => {
  const result = await remark().use(html).use(headings).process(markdown);
  return result.toString();
};

export { markdownToHtml };
