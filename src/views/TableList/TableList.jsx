import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Leads Table</h4>
            <p className={classes.cardCategoryWhite}>
              Unclosed Leads Table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Phone", "City", "Issue"]}
              tableData={[
                ["Dakota Rice", "615-233-9991", "Oud-Turnhout", "TV stopped working after unplugged"],
                ["Minerva Hooper", "901-844-4484", "Sinaai-Waas", "Can't figure out Google search Algorithm"],
                ["Sage Rodriguez", "615-111-5555", "Baileux", "Having issues with In-laws"],
                ["Philip Chaney", "777-660-1111", "Overland Park", "Accidently ate a spider"],
                ["Doris Greene", "619-110-0001", "Feldkirchen in Kärnten", "Snakes on Plane"],
                ["Mason Porter", "870-333-2222", "Gloucester", "How do I charge my Phone"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
