const parseArgs = () => {
  const parsedArgs = process.argv.slice(2).reduce((res, arg) => {
    if (arg.startsWith("--")) {
      res.push(arg.slice(2));
    } else {
      const previousArg = res.pop();
      res.push(`${previousArg} is ${arg}`);
    }
    return res;
  }, []);
  console.log(parsedArgs.join(", "));
};

parseArgs();
