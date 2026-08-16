export const PRODUCTS = [
  {
    name: "Cocoon Wool Coat",
    price: "$248",
    category: "outerwear",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop&crop=center",
  },
  {
    name: "Satin Midi Dress",
    price: "$195",
    category: "dresses",
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=800&fit=crop&crop=center",
  },
  {
    name: "Leather Tote Bag",
    price: "$320",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop&crop=center",
  },
  {
    name: "Alpaca Crew Sweater",
    price: "$178",
    category: "knitwear",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop&crop=center",
  },
  {
    name: "Field Jacket",
    price: "$265",
    category: "outerwear",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&crop=center",
  },
  {
    name: "Linen Maxi Dress",
    price: "$210",
    category: "dresses",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop&crop=center",
  },
];
export const EMAIL_CAPTURE = {
  eyebrow: "Stay close",
  headline: "Before anyone else.",
  body: "New drops, restocks, and the occasional note from the atelier — no more than twice a month.",
  image:
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  submitLabel: "Subscribe",
  fields: {
    email: {
      label: "Email address",
      placeholder: "your@email.com",
      required: true,
    },
    name: { label: "First name", placeholder: "Ada", required: false },
    interest: {
      label: "What are you interested in?",
      required: false,
      options: ["Womenswear", "Menswear", "Both"],
    },
  },
};
