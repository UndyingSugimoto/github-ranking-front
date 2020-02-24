import { RankgByLanguageRes } from "./data/RanksByLanguageRes";
import Fetcher from "../util/Fetcher";

async function getRanks() {
  const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT as string;
  const url = "/github-ranking/ranking";
  return await Fetcher.fetcher<RankgByLanguageRes>(endpoint + url, {
    method: "GET"
  });
}
const GetRanks = {
  getRanks: getRanks
};
export default GetRanks;
