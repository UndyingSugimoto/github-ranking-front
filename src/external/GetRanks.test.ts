import Fetcher from "../util/Fetcher";
import GetRanks from "./GetRanks";
import { RankgByLanguageRes } from "./data/RanksByLanguageRes";

describe("GetRanks", () => {
  test("getRanks", () => {
    const fetcherMock = jest
      .fn()
      // getRanks内のモック
      .mockImplementationOnce(() => {
        return {
          rankByLanguages: [
            {
              language: "language"
            }
          ]
        };
      });
    Fetcher.fetcher = fetcherMock;

    const res: Promise<RankgByLanguageRes> = GetRanks.getRanks();
    res.then(elm => {
      expect(elm.rankByLanguages[0].language).toBe("language");
    });
  });
});
