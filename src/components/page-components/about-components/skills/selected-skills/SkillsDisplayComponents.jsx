/** @format */

// IMPORT RELATED TO REACT
import React, { useCallback, useEffect, useState } from "react";

// IMPORT CHAKRA UI RELATED
import { Flex, List, ListItem } from "@chakra-ui/react";

// IMPORT RELATED TO COMPONENTS
import SkillsComponents from "./SkillsComponents";

// IMPORT RELATED TO JSON FILE
import { TechData } from "../../../../json/TechData";

// IMPORT RELATED TO REACT LOADER SPINNER
import { RotatingLines } from "react-loader-spinner";

const SkillsDisplayComponents = ({ skillsTab }) => {
  const [display, setDisplay] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadings = () => (
    <Flex h="200px" justify="center" align="center" w="100%">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Flex>
  );
    
  const fetchData = useCallback(() => {
    setLoading(true);
    try {
      if (TechData[skillsTab]) {
        setDisplay(
          <Flex
            gap={10}
            flexWrap="wrap"
            justify="center"
            align="center"
            w="100%"
            maxH="100%"
          >
            {TechData[skillsTab].map((skill) => (
              <Flex key={skill.id}>
                <SkillsComponents
                  type={skill.type}
                  src={skill.src}
                  alt={skill.alt}
                  name={skill.name}
                />
              </Flex>
            ))}
          </Flex>
        );
      } else {
        setDisplay(() => (
          <Flex px={10} w="100%" flexWrap="wrap">
            <List w="100%" spacing="7px" styleType="disc" color="secondary.500">
              <ListItem>Communication</ListItem>
              <ListItem>Adaptability</ListItem>
              <ListItem>Problem-solving</ListItem>
              <ListItem>Decision-making</ListItem>
              <ListItem>Attention to Detail</ListItem>
              <ListItem>Time Management</ListItem>
              <ListItem>Teamwork</ListItem>
            </List>
          </Flex>
        ));
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [skillsTab]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <div>{loading ? loadings() : display}</div>;
};

export default SkillsDisplayComponents;
