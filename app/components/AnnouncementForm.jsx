import { useEffect, useState } from "react";
import {
  Form,
  useActionData,
  useNavigation,
  useRevalidator,
} from "react-router";

export default function AnnouncementForm() {
  const [announcement, setAnnouncement] = useState("");

  const actionData = useActionData();
  const navigation = useNavigation();
  const revalidator = useRevalidator();

  useEffect(() => {
    if (actionData?.success) {
      setAnnouncement("");
      revalidator.revalidate();
    }
  }, [actionData, revalidator]);

  const isSubmitting = navigation.state === "submitting";

  return (
    <div style={{ marginBottom: "40px" }}>
      <Form method="post">
        <h2>Announcement Dashboard</h2>

        <input
          type="text"
          name="announcement"
          placeholder="Enter announcement"
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
          required
          style={{
            width: "350px",
            padding: "10px",
            fontSize: "16px",
          }}
        />

        <br />
        <br />

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          {isSubmitting ? "Saving..." : "Save Announcement"}
        </button>
      </Form>
    </div>
  );
}
