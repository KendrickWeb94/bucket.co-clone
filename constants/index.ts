// navlink.ts
export interface NavLink {
  id: number;
  text: string;
  url: string;
}

const navLinks: NavLink[] = [
  { id: 1, text: "Product", url: "/" },
  { id: 2, text: "Approach", url: "/" },
  { id: 3, text: "Pricing", url: "/" },
  { id: 4, text: "Changelog", url: "/" },
  { id: 5, text: "Company", url: "/" },
];

export default navLinks;
