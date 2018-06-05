// Type definitions for minarai
// Project: https://github.com/Nextremer/minarai-types
// Definitions by: Naoki Sawada <https://github.com/naoki-sawada>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace minarai {
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
      applicationId: string;
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
    isDefault: boolean;
    score: number;
    body: {
      entities: [{
        type: string;
        value: string;
      }];
      intent: string;
      text: string;
      extra: any;
    };
    raw: any;
  }

  export interface IPartnerPostSelectorResponseBody {
    messages: [{
      layout: string;
      titleText: string;
      utterances: [{
        actor: string;
        text: string;
        extra?: {};
      }],
      buttons?: [{
        presentation: {
          type: string;
          detail: undefined;
        }
        action: {
          type: string;
          detail: undefined;
        }
        extra?: {};
      }]
      extra?: {};
    }];
    extra?: {};
  }

  export interface IPartnerPostSelectorResponse {
    head: {
      engineType: string;
      engineName: string;
      requestId: string;
    };
    body: IPartnerPostSelectorResponseBody[];
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
