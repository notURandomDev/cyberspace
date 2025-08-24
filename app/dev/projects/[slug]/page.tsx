import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// 动态生成路径
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "projects");
  const files = fs.readdirSync(dir);

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

const InlinePadding = {
  paddingTop: 3,
  paddingBottom: 3,
};

const InlineMargin = {
  marginTop: 1,
  marginBottom: 1,
};

const H1Margin = {
  marginTop: 22.4,
  marginBottom: 1,
};

const H2Margin = {
  marginTop: 32,
  marginBottom: 4,
};

const H3Margin = {
  marginTop: 22.4,
  marginBottom: 1,
};

const H4Margin = {
  marginTop: 16,
  marginBottom: 1,
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    `${slug}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return (
    <div className="flex flex-col items-center">
      <ReactMarkdown
        className="flex flex-col max-w-2xl"
        components={{
          h1: ({ node, ...props }) => (
            <h2
              className="text-3xl font-semibold"
              style={{ ...H2Margin, ...InlinePadding }}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h3
              className="text-2xl font-semibold"
              style={{ ...H3Margin, ...InlinePadding }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h4
              className="text-xl font-semibold"
              style={{ ...H4Margin, ...InlinePadding }}
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <Card>
              <CardBody>{props.children}</CardBody>
            </Card>
          ),
          ul: ({ node, ordered, ...props }) => (
            <ul className="list-disc list-inside" {...props} />
          ),
          ol: ({ node, ordered, ...props }) => (
            <ol className="list-decimal list-inside" {...props} />
          ),
          li: ({ node, ordered, ...props }) => (
            <li
              className="px-0.5"
              style={{ ...InlinePadding, ...InlineMargin }}
              {...props}
            />
          ),
          img: ({ node, onError, ...props }) => (
            <span className="flex justify-center">
              <Image radius="lg" shadow="md" {...props} />
            </span>
          ),
          p: ({ node, children, ...props }) => {
            const tagName = (node as any).children[0].tagName;
            if (children.length === 1 && tagName === "img") {
              return <div className="flex justify-center my-6">{children}</div>;
            }
            return (
              <p className="text-base" style={InlinePadding} {...props}>
                {children}
              </p>
            );
          },
          code: ({ inline, className, children, style, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {fileContent}
      </ReactMarkdown>
    </div>
  );
}
