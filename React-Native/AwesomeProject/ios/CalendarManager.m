//
//  CalendarManager.m
//  AwesomeProject
//
//  Created by ShannonChen on 2017/7/5.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTConvert.h>

@implementation CalendarManager

// 导出模块
RCT_EXPORT_MODULE()

// 手动转 date 格式
RCT_EXPORT_METHOD(addStringEvent:(NSString *)name dateString:(NSString *)ISO8601DateString callback:(RCTResponseSenderBlock)callback) {
  
  NSDate *date = [RCTConvert NSDate:ISO8601DateString];
  
  NSLog(@"Pretending to create an event %@ at %@", name, date);
  
  if (callback) {
    callback(@[name, date]);
  }
}


// 自动转 date 格式
RCT_EXPORT_METHOD(addDateEvent:(NSString *)name date:(NSDate *)date callback:(RCTResponseSenderBlock)callback) {
  
  NSLog(@"Pretending to create an event %@ at %@", name, date);
  
  if (callback) {
    callback(@[name, date]);
  }
}


RCT_EXPORT_METHOD(addDetailEvent:(NSString *)name detailInfo:(NSDictionary *)detailInfo callback:(RCTResponseSenderBlock)callback) {
  NSLog(@"Pretending to create an event %@ at %@ %@", name, detailInfo[@"location"], detailInfo[@"date"]);
  
  if (callback) {
      callback(@[name, detailInfo]);
  }
}


@end
