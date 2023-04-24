function BlogComment() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 border-b border-neutral-600 pb-4">
        <div></div>
        <input type="text" placeholder="Add a comment..." className="p-4" />
      </div>
    </div>
  );
}

export default BlogComment;
