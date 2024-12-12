type ApiRequest<Data, Method extends "GET" | "POST" = "GET"> = {
  data: Data;
  method: Method;
};

type TSConfig<Config extends { strict: boolean } = { strict: true }> = Config;
