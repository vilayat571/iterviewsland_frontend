export const socialMediaIcons = [
  {
    url: "https://api.whatsapp.com/send?text=",
    alt: "Share on WhatsApp",
    text: "WhatsApp",
    queryParams: (shareUrl: string, title: string) =>
      `${shareUrl}%20${title}`,
  },
  {
    url: "https://www.linkedin.com/shareArticle?mini=true&url=",
    alt: "Share on LinkedIn",
    text: "LinkedIn",
    queryParams: (shareUrl: string, title: string) =>
      `${shareUrl}&title=${encodeURIComponent(title)}`,
  },
  {
    url: "https://github.com/",
    alt: "Share on GitHub",
    text: "GitHub",
    queryParams: (shareUrl: string) => shareUrl, // Placeholder link
  },
  {
    url: "https://www.facebook.com/sharer/sharer.php?u=",
    alt: "Share on Facebook",
    text: "Facebook",
    queryParams: (shareUrl: string) => shareUrl,
  },
];
