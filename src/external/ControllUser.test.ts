import Fetcher from "../util/Fetcher";
import AppClient from "../util/AppClient";
import ControllUser from "./ControllUser";
import { UserDetailRes } from "./data/UserDetailRes";

describe("ControllUser", () => {
  test("updateUserData", () => {
    // getUser内のモック
    const appCilentMock = jest.fn().mockImplementation(() => {
      return {
        user: {
          userId: "userId"
        }
      };
    });
    AppClient.query = appCilentMock;

    const fetcherMock = jest
      .fn()
      // updateUser内のモック
      .mockImplementationOnce(() => {
        return {};
      })
      // getUserDetail内のモック
      .mockImplementationOnce(() => {
        return {
          userId: "userId"
        };
      });
    Fetcher.fetcher = fetcherMock;

    const res: Promise<UserDetailRes> = ControllUser.updateUserData("userId");
    res.then(elm => {
      expect(elm.userId).toBe("userId");
    });
  });

  test("getUserData DBに見つかったケース", () => {
    const fetcherMock = jest
      .fn()
      // existsUser内のモック
      .mockImplementationOnce(() => {
        return {
          exists: true
        };
      })
      // getUserDetail内のモック
      .mockImplementationOnce(() => {
        return {
          userId: "userId"
        };
      });
    Fetcher.fetcher = fetcherMock;

    const res: Promise<UserDetailRes> = ControllUser.getUserData("userId");
    res.then(elm => {
      expect(elm.userId).toBe("userId");
    });
  });

  test("getUserData DBに見つからなかったケース", () => {
    // getUser内のモック
    const appCilentMock = jest.fn().mockImplementation(() => {
      return {
        user: {
          userId: "userId"
        }
      };
    });
    AppClient.query = appCilentMock;

    const fetcherMock = jest
      .fn()
      // existsUser内のモック
      .mockImplementationOnce(() => {
        return {
          exists: false
        };
      })
      // entryUser内のモック
      .mockImplementationOnce(() => {
        return {};
      })
      // getUserDetail内のモック
      .mockImplementationOnce(() => {
        return {
          userId: "userId"
        };
      });
    Fetcher.fetcher = fetcherMock;

    const res: Promise<UserDetailRes> = ControllUser.getUserData("userId");
    res.then(elm => {
      expect(elm.userId).toBe("userId");
    });
  });
});
