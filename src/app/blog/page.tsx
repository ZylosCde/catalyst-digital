import { CTABannerSection } from "@/sections/_shared/CTABannerSection";
import { BlogHeroSection } from "@/sections/blog/BlogHeroSection";
import { BlogSidebarSection } from "@/sections/blog/BlogSidebarSection";
import { FeaturedPostSection } from "@/sections/blog/FeaturedPostSection";
import { LoadMoreSection } from "@/sections/blog/LoadMoreSection";
import { PostsGridSection } from "@/sections/blog/PostsGridSection";

export default function BlogPage() {
  return (
    <>
      <BlogHeroSection />
      <FeaturedPostSection />
      <PostsGridSection />
      <BlogSidebarSection />
      <LoadMoreSection />
      <CTABannerSection />
    </>
  );
}
