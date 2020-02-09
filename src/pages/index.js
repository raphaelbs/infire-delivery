import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useFirebase } from "gatsby-plugin-firebase";

import Item from "../components/item";
import Layout from "../components/layout";
import SEO from "../components/seo";

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: 16,
    paddingBottom: 16,
  },
}));

const IndexPage = () => {
  const classes = useStyles();

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
    <Layout>
      <SEO title="Cardápio" />
      <section className={classes.section}>
        {cardapio.map(item => (
          <Item {...item} key={item.id} />
        ))}
      </section>
    </Layout>
  );
};

export default IndexPage;
