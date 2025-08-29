import {createClient } from "@sanity/client";
import imgUrlBuilder from "@sanity/image-url";

// ❌ Old hardcoded client (commented, kept for reference)
// export const client = sanityClient({
//   projectId: "jkh9zf75",
//   dataset: "production",
//   apiVersion: "2021-03-25",
//   token: "skWufbqM0PfKaMxw4xXyO6A1IyhRkqJ0wnIW1GKNEvUMWt5zgV2X0f5rgGYAMUdi20e2y6gC6RGx0QIKvCs3Zc9I8jYrdIvDzL34c5QxUWF2hSyGE3XPs4ZVZPLxvVEn87xE6HUya3GFlQjfBpKCwhyJMWHoSAFJK6oylcmfJzq3yzL2voOU",
//   useCdn: true
// });

// ✅ New client using environment variables
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

// Image URL builder
const builder = imgUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
