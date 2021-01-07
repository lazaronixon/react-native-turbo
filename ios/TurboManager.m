#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(TurboManager, NSObject)
RCT_EXTERN_METHOD(startSingleScreenApp:(NSDictionary)route withOptions:(NSDictionary)options)
RCT_EXTERN_METHOD(visit:(NSDictionary)route)
@end
