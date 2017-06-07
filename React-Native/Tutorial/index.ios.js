import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  XMLHttpRequest
} from 'react-native';

// 0.创建第一个 React Native App
class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

// 1. 加载图片的 Bananas App
class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      // 属性：source，style
      // 我们需要用括号来把pic这个变量嵌入到JSX语句中。
      // 括号的意思是括号内部为一个js变量或表达式，需要执行后取值。
      // 因此我们可以把任意合法的JavaScript表达式通过括号嵌入到JSX语句中。
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}

// 2. 显示自定义 Greeting 组件的 App
class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

// 自定义 Greeting 组件
class Greeting extends Component {
  render() {
    return (
      // 自定义的组件也可以使用props，只需在render函数中引用this.props，然后按需处理即可。
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

// 3.显示自定义 Blink 组件的 App
class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

// 定时更新状态的 Blink 组件
class Blink extends Component {
  constructor(props) {
    super(props);
    // 一般来说，你需要在constructor中初始化state
    this.state = { showText: true};

    // 每 1000 毫秒对 showText 状态进行一次取反
    setInterval(() => {
      // 调用 setState 方法修改 state
      this.setState(previousState => {
        return { showText: !previousState.showText};
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';

    return (
      <Text>{display}</Text>
    );
  }

}

// 4.带有各种自定义样式的 App
class LotsOfStyles extends Component {
  render() {
    return (
      // style属性可以是一个普通的JavaScript对象
      // 你还可以传入一个数组——在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}


// 使用 StyleSheet.create 来集中定义组件的样式
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
});

// 5. 指定控件宽高的 APP
class FixedDimensionsBasics extends Component {
  render() {
    return (
      // React Native中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 375, height: 375, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

// 6.弹性（Flex）宽高
// 在组件样式中使用flex可以使其在可利用的空间中动态地扩张或收缩。
// 一般而言我们会使用flex:1来指定某个组件扩张以撑满所有剩余的空间。
// 如果有多个并列的子组件使用了flex:1，则这些子组件会平分父容器中剩余的空间。
// 如果这些并列的子组件的flex值不一样，则谁的值更大，谁占据剩余空间的比例就更大（即占据剩余空间的比等于并列组件间flex值的比）。
class FlexDimensionsBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};


// 7.使用Flexbox布局
// 我们在React Native中使用flexbox规则来指定某个组件的子元素的布局。
// 一般来说，使用flexDirection、alignItems和 justifyContent三个样式属性就已经能满足大多数布局需求。
// 详见 简易布局图解：
// 布局样式属性：http://reactnative.cn/docs/0.44/layout-props.html

// 7.1 Flex Direction
class FlexDirectionBasics extends Component {
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

// 7.2 Justify Content
// 在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。
// 子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？
// 对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。
class JustifyContentBasics extends Component {
  render() {
    return (
      // 尝试把`justifyContent`改为`center`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

// 7.3 Align Items
// 在组件的style中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。
// 子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？
// 对应的这些可选项有：flex-start、center、flex-end以及stretch。
class AlignItemsBasics extends Component {
  render() {
    return (
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};


// 8.处理文本输入
class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    // 我们把text保存到state中，因为它会随着时间变化。
    this.state = {text: ''};
  }

// TextInput是一个允许用户输入文本的基础组件 http://reactnative.cn/docs/0.44/textinput.html
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})} // onChangeText 函数会在文本变化时被调用
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

// 9.ScrollView
// ScrollView适合用来显示数量不多的滚动元素。
class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}> What's the best </Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}> Framework around? </Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

  // 10. ListView
  // 如果你需要显示较长的滚动列表，那么应该使用功能差不多但性能更好的ListView组件。
  // 和ScrollView不同的是，ListView并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。
  // ListView组件必须的两个属性是dataSource和renderRow。
  // dataSource是列表的数据源，而renderRow则逐个解析数据源中的数据，然后返回一个设定好格式的组件来渲染。
  class ListViewBasics extends Component {
    // 初始化模拟数据
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows([
          'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
          'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
          'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
          'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
        ])
      };
    }
    render() {
      return (
        <View style={{flex: 1, paddingTop: 22}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text style={{height: 100, fontSize: 50}}>{rowData}</Text>}
          />
        </View>
      );
    }
  }

// 11. 网络


// 注册 Tutorial 组件为根容器
// 注意，这里用引号括起来的'Tutorial'必须和你创建的项目名一致；“() =>”后面的组件名是你要加载 APP 组件名
AppRegistry.registerComponent('Tutorial', () => ListViewBasics);
