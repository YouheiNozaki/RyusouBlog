import React from 'react';
import { Grid } from '@chakra-ui/core';

import TechBox from '../atom/Techbox';

const TechBoxList: React.FC = () => (
  <Grid templateColumns="repeat(5, 1fr)" gap={6} marginBottom={2}>
    <TechBox name="HTML5" url="html" />
    <TechBox name="CSS3" url="css" />
    <TechBox name="JavaScript" url="javascript" />
    <TechBox name="TypeScript" url="typescript" />
    <TechBox name="Node.js" url="nodejs" />
    <TechBox name="React" url="react" />
    <TechBox name="Redux" url="redux" />
    <TechBox name="PostgreSQL" url="postgresql" />
    <TechBox name="MongoDB" url="mongodb" />
  </Grid>
);

export default TechBoxList;
