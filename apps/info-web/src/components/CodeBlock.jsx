// src/components/CodeBlock.jsx
const CodeBlock = ({ code, title }) => {
  return (
    <div className="code-block">
      {title && <h4>{title}</h4>}
      <pre>
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
};

export default CodeBlock;
