
export type Category = {
    params: { category: string },
        props: {
        category:string
        }
}

function getCategories(){
    // Extract all unique categories
    const mdPostsGlob = import.meta.glob('../content/blog/*.md', { eager: true });
    const mdxPostsGlob = import.meta.glob('../content/blog/*.mdx', { eager: true });

   
    const allPosts = [...Object.values(mdPostsGlob), ...Object.values(mdxPostsGlob)] as any[];
    const allCategories = new Set<string>();
    allPosts.forEach((post: any) => {
    if (post.frontmatter.categories) {
        post.frontmatter.categories.forEach((category: string) => {
        allCategories.add(category);
        });
    }
    });

    // Create paths for each category
    return Array.from(allCategories).map((category: string) => {
    const categorySlug = category.toLowerCase().replace(/[\/\s]+/g, '-');

    return {
        params: { category: categorySlug },
        props: {
        category,
        }
    };
    });
}


  export default getCategories;