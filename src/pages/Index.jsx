import { Container, VStack, Heading, Input, Button, List, ListItem, ListIcon } from "@chakra-ui/react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading mb={6}>Todo App</Heading>
        <Input
          placeholder="Add a new task"
          value={inputValue}
          onChange={handleInputChange}
          size="md"
          mb={4}
        />
        <Button onClick={handleAddTask} colorScheme="blue" px={8}>
          Add Task
        </Button>
        <List spacing={3} mt={6} w="full">
          {tasks.map((task, index) => (
            <ListItem key={index} p={2} bg="gray.100" borderRadius="md">
              <ListIcon as={FaCheckCircle} color="green.500" />
              {task}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;