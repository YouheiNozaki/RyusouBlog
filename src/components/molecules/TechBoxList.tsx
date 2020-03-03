import React from 'react';
import { Grid } from '@chakra-ui/core';

import TechBox from '../atom/Techbox';

export const TechBoxList: React.FC = () => (
  <Grid
    templateColumns={{
      base: 'repeat(2, 1fr)',
      md: 'repeat(5, 1fr)',
      lg: 'repeat(5, 1fr)',
      xl: 'repeat(5, 1fr)',
    }}
    gap={[10, 10, 6, 6]}
    marginLeft={[10, 10, 0, 0]}
    marginRight={[10, 0, 0, 0]}
    marginBottom={6}
  >
    <TechBox name="HTML5" url="html" alt="HTML5" />
    <TechBox name="CSS3" url="css" alt="CSS3" />
    <TechBox name="JavaScript" url="javascript" alt="javascript" />
    <TechBox name="TypeScript" url="typescript" alt="typescript" />
    <TechBox name="Node.js" url="nodejs" alt="node.js" />
    <TechBox name="React" url="react" alt="react" />
    <TechBox name="Redux" url="redux" alt="redux" />
    <TechBox name="PostgreSQL" url="postgresql" alt="postgreSQL" />
    <TechBox name="MongoDB" url="mongodb" alt="mongodb" />
  </Grid>
);
