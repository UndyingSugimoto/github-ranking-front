import { match as routerMatch } from "react-router";

type MatchParameter<Params> = { [K in keyof Params]?: string };

export const routerTestProps = <Params extends MatchParameter<Params> = {}>(
  path: string,
  params: Params,
  extendMatch: Partial<routerMatch<any>> = {}
) => {
  const match: routerMatch<Params> = Object.assign(
    {},
    {
      isExact: false,
      path,
      url: generateUrl(path, params),
      params
    },
    extendMatch
  );

  return { match };
};

const generateUrl = <Params extends MatchParameter<Params>>(
  path: string,
  params: Params
): string => {
  let tempPath = path;

  for (const param in params) {
    if (params.hasOwnProperty(param)) {
      const value = params[param];
      tempPath = tempPath.replace(
        `:${param}`,
        value as NonNullable<typeof value>
      );
    }
  }

  return tempPath;
};
