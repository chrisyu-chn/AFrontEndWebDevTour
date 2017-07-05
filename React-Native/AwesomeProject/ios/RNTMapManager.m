//
//  RNTMapManager.m
//  AwesomeProject
//
//  Created by ShannonChen on 2017/7/5.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import <MapKit/MapKit.h>
#import <React/RCTConvert.h>

@implementation RCTConvert(CoreLocation)

RCT_CONVERTER(CLLocationDegrees, CLLocationDegrees, doubleValue);
RCT_CONVERTER(CLLocationDistance, CLLocationDistance, doubleValue);

+ (CLLocationCoordinate2D)CLLocationCoordinate2D:(id)json
{
  json = [self NSDictionary:json];
  return (CLLocationCoordinate2D){
    [self CLLocationDegrees:json[@"latitude"]],
    [self CLLocationDegrees:json[@"longitude"]]
  };
}

@end



@implementation RCTConvert (MapKit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json {
  json = [self NSDictionary:json];
  
  return (MKCoordinateSpan){
    [self CLLocationDegrees:json[@"latitudeDelta"]],
    [self CLLocationDegrees:json[@"longitudeDelta"]]
  };
}

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json {
  
  return (MKCoordinateRegion){
    [self CLLocationCoordinate2D:json],
    [self MKCoordinateSpan:json]
  };
}

@end


@interface RNTMap: MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onChange;

@end


@implementation RNTMap



@end



@interface RNTMapManager() <MKMapViewDelegate>


@end


@implementation RNTMapManager

// 导出模块
RCT_EXPORT_MODULE()

// 定义属性
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)

RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)


// set 方法中添加自定义代码
// NativeComponents iOS Documentation - RCT_CUSTOM_VIEW_PROPERTY https://github.com/facebook/react-native/issues/14436
// - (void)set_region:(id)json forView:(RNTMap *)view withDefaultView:(RNTMap *)defaultView
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, RNTMap) {
  
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

- (UIView *)view {
  
  RNTMap *mapView = [[RNTMap alloc] init];
  mapView.delegate = self;
  
  return mapView;
}


// 导出常量  http://reactnative.cn/docs/0.45/native-modules-ios.html#%E5%AF%BC%E5%87%BA%E5%B8%B8%E9%87%8F
- (NSDictionary <NSString *, id> *)constantsToExport {
  
  return @{
           @"defaultRegion": @{
               @"latitude": @(39.91),
               @"longitude": @(116.40),
               @"latitudeDelta": @(0.1),
               @"longitudeDelta": @(0.1),
               }
           };
}


#pragma mark MKMapViewDelegate

- (void)mapView:(RNTMap *)mapView regionDidChangeAnimated:(BOOL)animated {
  
  if (!mapView.onChange) {
    return;
  }
  
  MKCoordinateRegion region = mapView.region;
  mapView.onChange(@{
                     @"region": @{
                         @"latitude": @(region.center.latitude),
                         @"longitude": @(region.center.longitude),
                         @"latitudeDelta": @(region.span.latitudeDelta),
                         @"longitudeDelta": @(region.span.longitudeDelta),
                         }
                     });
}


@end




