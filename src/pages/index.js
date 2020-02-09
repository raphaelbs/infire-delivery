import React from "react";

import { useFirebase } from "gatsby-plugin-firebase";

import Item from "../components/item";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Box } from "@material-ui/core";

const sortByOrder = (
  { order: order1 = Infinity },
  { order: order2 = Infinity }
) => (order1 > order2 ? 1 : -1);

const IndexPage = () => {
  const [cardapio, setCardapio] = React.useState([]);
  const [analytics, setAnalytics] = React.useState(null);

  useFirebase(firebase => {
    setAnalytics(firebase.analytics());

    const db = firebase.firestore();
    db.collection("cardapio")
      .get()
      .then(querySnapshot => {
        const cardapioFirestore = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          cardapioFirestore.push({
            id: doc.id,
            ...data,
          });
        });
        setCardapio(cardapioFirestore);
      });
  }, []);

  return (
    <Layout subtitle="Cardápio online">
      <SEO title="InFire Delivery" description="Cardápio online" />
      <Box component="section" display="flex" flexWrap="wrap">
        {cardapio.sort(sortByOrder).map(item => (
          <Item {...item} key={item.id} />
        ))}
      </Box>
    </Layout>
  );
};

export default IndexPage;
