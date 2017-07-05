//
//  RNTMapManager.h
//  AwesomeProject
//
//  Created by ShannonChen on 2017/7/5.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <React/RCTViewManager.h>


/**
 定义原生 UI 组件
 */
@interface RNTMapManager : RCTViewManager

@property (nonatomic, copy) RCTBubblingEventBlock onChange;

@end
