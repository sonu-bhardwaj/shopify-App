import { boundary } from "@shopify/shopify-app-react-router/server";
import { useLoaderData } from "react-router";
import { authenticate } from "../shopify.server";

import AnnouncementForm from "../components/AnnouncementForm";
import AnnouncementHistory from "../components/AnnouncementHistory";

import { connectDB } from "../lib/mongodb";
import Announcement from "../models/Announcement";
import { updateAnnouncementMetafield } from "../services/metafield.service";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  await connectDB();

  const announcements = await Announcement.find()
    .sort({ createdAt: -1 })
    .lean();

  const data = announcements.map((item, index) => ({
    ...item,
    isCurrent: index === 0,
  }));

  return {
    announcements: JSON.parse(JSON.stringify(data)),
  };
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  await connectDB();

  const formData = await request.formData();
  const announcement = formData.get("announcement");

  // Save to MongoDB
  await Announcement.create({
    text: announcement,
  });

  // Save to Shopify Metafield
  await updateAnnouncementMetafield(admin, announcement);

  console.log("Announcement saved:", announcement);

  return {
    success: true,
  };
};

export default function Index() {
  const { announcements } = useLoaderData();

  return (
    <s-page heading="Announcement App">
      <AnnouncementForm />
      <AnnouncementHistory announcements={announcements} />
    </s-page>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
