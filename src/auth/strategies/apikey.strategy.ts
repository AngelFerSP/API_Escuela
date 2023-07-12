
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { HeaderAPIKeyStrategy } from "passport-headerapikey";

@Injectable()
export class ApiKeyStategy extends PassportStrategy( HeaderAPIKeyStrategy, 'api-key'){

    constructor(){
        super( { header: 'api-key', prefix: ''}, true, async (apiKey, done) => {
            if(this.validateApiKey(apiKey)) {
                done(null, true);
            }
            done(new UnauthorizedException(), null);
            
        });
    }

    validateApiKey(apiKey: string){
        const apiKeys: string[] = ['api-key-1', 'api-key-2'];
        return apiKeys.find(key => apiKey == key);
      }
}