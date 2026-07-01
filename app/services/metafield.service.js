export async function updateAnnouncementMetafield(admin, announcement) {
  // Get the Shop ID
  const shopResponse = await admin.graphql(`
    #graphql
    query {
      shop {
        id
      }
    }
  `);

  const shopData = await shopResponse.json();
  const shopId = shopData.data.shop.id;

  console.log("Shop ID:", shopId);

  // Update the shop metafield
  const response = await admin.graphql(
    `#graphql
    mutation SetMetafield($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields {
          id
          key
          namespace
          value
        }
        userErrors {
          field
          message
        }
      }
    }
    `,
    {
      variables: {
        metafields: [
          {
            ownerId: shopId,
            namespace: "my_app",
            key: "announcement",
            type: "single_line_text_field",
            value: announcement,
          },
        ],
      },
    },
  );

  const result = await response.json();

  console.log("========== SHOPIFY RESPONSE ==========");
  console.log(JSON.stringify(result, null, 2));
  console.log("======================================");

  // Check for Shopify errors
  const errors = result.data?.metafieldsSet?.userErrors || [];

  if (errors.length > 0) {
    console.error("Shopify Metafield Error:", errors);

    throw new Error(errors.map((err) => err.message).join(", "));
  }

  console.log("Metafield updated successfully!");

  return result.data.metafieldsSet.metafields[0];
}
