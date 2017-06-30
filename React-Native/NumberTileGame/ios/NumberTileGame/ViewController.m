//
//  ViewController.m
//  NumberTileGame
//
//  Created by ShannonChen on 2017/6/30.
//  Copyright © 2017年 ShannonChen. All rights reserved.
//

#import "ViewController.h"

#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}


- (IBAction)highScoreButtonPressed:(id)sender {
    
    NSLog(@"High Score Button Pressed");
    
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                                                 moduleName        : @"RNHighScores"
                                                 initialProperties :
                             @{
                               @"scores" : @[
                                       @{
                                           @"name" : @"Alex",
                                           @"value": @"42"
                                           },
                                       @{
                                           @"name" : @"Joel",
                                           @"value": @"10"
                                           }
                                       ]
                               }
                                                  launchOptions    : nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
}


@end
