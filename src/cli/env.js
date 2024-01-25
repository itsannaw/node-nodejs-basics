const parseEnv = () => {
  const str = [];
  Object.keys(process.env).forEach((key) => {
    if (key.startsWith("RSS_")) {
      str.push(`${key}=${process.env[key]}`);
    }
  });
  console.log(str.join("; "));
};

parseEnv();
