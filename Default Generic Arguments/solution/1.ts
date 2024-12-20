export type ApiRequest<Data, Method extends "GET" | "POST" = "GET"> = {
	data: Data;
	method: Method
};

export type TSConfig<Config extends { strict: boolean } = { strict : true }> = Config;
