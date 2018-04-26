// Type definitions for minarai
// Project: https://github.com/Nextremer/minarai-types
// Definitions by: Naoki Sawada <https://github.com/naoki-sawada>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare namespace minarai {
  // アプリケーションサーバの`/authenticate`リクエストの要求
  interface IPartnerAuthenticateRequest {
    userId: any;
    clientId: number | string;
    deviceId: any;
    params?: any;
  }

  // アプリケーションサーバの`/authenticate`リクエストに対する応答
  // 失敗した場合はstatus code 401を期待
  export interface IPartnerAuthenticateResponse {
    message: string;
  }

  // アプリケーションサーバに`/engine/pre_selector`リクエストする際のパラメーター
  interface IPartnerPreSelectorRequest {
    head: {
      requestId: string;
      userId: any;
      clientId: number | string;
      deviceId: any;
      callBackUri: string;
    };
    body: {
      userUtterance: string;
    };
  }

  // `/engine/pre_selector`のコールバックである`/app/pre_selector_response`で
  // 受け取るパラメーター
  interface IPartnerPreSelectorResponse {
    requestId: string;
    engineName: string[];
  }

  // アプリケーションサーバに`/engine/post_selector`リクエストする際のパラメーター
  interface IPartnerPostSelectorRequest {
    head: {
      requestId: string;
      userId: any;
      clientId: number | string;
      deviceId: any;
      callBackUri: string;
    };
    body: {
      userUtterance: string;
      engineResponses?: IEngineQueryResponse[];
      // エンジンへの問い合わせに失敗したときはそのエラーメッセージを返す
      error?: string;
    };
  }

  export interface IEngineQueryResponse {
    engineType: string;
    engineName: string;
    body: any;
  }

  export interface IPartnerPostSelectorResponseBody {
    messages: Array<{
      value: string;
      uiCommand?: any;
      extra?: any;
    }>;
    extra?: any;
    type?: string;
  }

  // `/engine/post_selector`のコールバックである`/app/post_selector_response`で
  // 受け取るパラメーター
  export interface IPartnerPostSelectorResponse {
    head: {
      requestId: string;
      engineType: string;
      engineName: string;
      timestampUnixTime?: number;
    };
    body: IPartnerPostSelectorResponseBody;
  }

  // アプリケーションサーバに`leave`リクエストする際のパラメーター
  interface IPartnerLeaveRequest {
    userId: any;
    clientId: number | string;
    deviceId: any;
    params?: any;
  }

  // アプリケーションサーバに`operator/message`する際のパラメーター
  interface IPartnerOperatorMessageRequest {
    head: {
      userId: any;
      clientId: number | string;
      deviceId: any;
    };
    body: IPartnerPostSelectorResponseBody;
  }
}