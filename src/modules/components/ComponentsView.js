import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

import { colors, fonts } from '../../styles';

const autocompleteImg = require('../../../assets/images/components/autocomplete.png')
const avatarImg = require('../../../assets/images/components/avatar.png')
const bottomNavImg = require ('../../../assets/images/components/bottom-navigation.png')
const btnImg = require('../../../assets/images/components/button.png')
const btnGroupImg = require('../../../assets/images/components/button-group.png')
const calendarImg = require('../../../assets/images/components/calendar.png')
const cardImg = require('../../../assets/images/components/card.png')
const checkboxImg = require('../../../assets/images/components/checkbox.png')
const datepickerImg = require('../../../assets/images/components/date-picker.png')
const drawerImg = require('../../../assets/images/components/drawer.png')
const iconImg = require('../../../assets/images/components/icon.png')
const inputImg = require('../../../assets/images/components/input.png')
const layoutImg = require('../../../assets/images/components/layout.png')
const listImg = require('../../../assets/images/components/list.png')
const menuImg = require('../../../assets/images/components/menu.png')
const modalImg = require('../../../assets/images/components/modal.png')
const overflowMenuImg = require('../../../assets/images/components/overflow-menu.png')
const popoverImg = require('../../../assets/images/components/popover.png')
const rangeCalendarImg = require('../../../assets/images/components/range-calendar.png')
const rangeDatepickerImg = require('../../../assets/images/components/range-datepicker.png')
const selectImg = require('../../../assets/images/components/select.png')
const spinnerImg = require('../../../assets/images/components/spinner.png')
const tabViewImg = require('../../../assets/images/components/tabs.png')
const textImg = require('../../../assets/images/components/text.png')
const toggleImg = require('../../../assets/images/components/toggle.png')
const tooltipImg = require('../../../assets/images/components/tooltip.png')
const topNavImg = require('../../../assets/images/components/top-navigation.png')
const badgesImg = require('../../../assets/images/components/badges.png')


export default function ComponentsScreen(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Autocomplete')}
            style={styles.item}
          >
            <Image source={autocompleteImg} />
            <Text style={styles.itemText}>Autocomplete</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Avatar')}
            style={styles.item}
          >
            <Image source={avatarImg}/>
            <Text style={styles.itemText}>Avatar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Bottom Navigation')}
            style={styles.item}
          >
            <Image source={bottomNavImg}/>
            <Text style={styles.itemText}>Bottom Navigation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Button')}
            style={styles.item}
          >
            <Image source={btnImg}/>
            <Text style={styles.itemText}>Button</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Button Group')}
            style={styles.item}
          >
            <Image source={btnGroupImg}/>
            <Text style={styles.itemText}>Button Group</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Calendar')}
            style={styles.item}
          >
            <Image source={calendarImg}/>
            <Text style={styles.itemText}>Calendar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Card')}
            style={styles.item}
          >
            <Image source={cardImg}/>
            <Text style={styles.itemText}>Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Checkbox')}
            style={styles.item}
          >
            <Image source={checkboxImg}/>
            <Text style={styles.itemText}>Checkbox</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Datepicker')}
            style={styles.item}
          >
            <Image source={datepickerImg}/>
            <Text style={styles.itemText}>Datepicker</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Drawer')}
            style={styles.item}
          >
            <Image source={drawerImg}/>
            <Text style={styles.itemText}>Drawer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Icon')}
            style={styles.item}
          >
            <Image source={iconImg}/>
            <Text style={styles.itemText}>Icon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Input')}
            style={styles.item}
          >
            <Image source={inputImg}/>
            <Text style={styles.itemText}>Input</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Layout')}
            style={styles.item}
          >
            <Image source={layoutImg}/>
            <Text style={styles.itemText}>Layout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('List')}
            style={styles.item}
          >
            <Image source={listImg}/>
            <Text style={styles.itemText}>List</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Menu')}
            style={styles.item}
          >
            <Image source={menuImg}/>
            <Text style={styles.itemText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Modal')}
            style={styles.item}
          >
            <Image source={modalImg}/>
            <Text style={styles.itemText}>Modal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Overflow Menu')}
            style={styles.item}
          >
            <Image source={overflowMenuImg}/>
            <Text style={styles.itemText}>Overflow Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Popover')}
            style={styles.item}
          >
            <Image source={popoverImg}/>
            <Text style={styles.itemText}>Popover</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Range Calendar')}
            style={styles.item}
          >
            <Image source={rangeCalendarImg}/>
            <Text style={styles.itemText}>Range Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Charts')}
            style={styles.item}
          >
            <Image source={rangeDatepickerImg}/>
            <Text style={styles.itemText}>Range Datepicker</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Select')}
            style={styles.item}
          >
            <Image source={selectImg}/>
            <Text style={styles.itemText}>Select</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Spinner')}
            style={styles.item}
          >
            <Image source={spinnerImg}/>
            <Text style={styles.itemText}>Spinner</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Tab View')}
            style={styles.item}
          >
            <Image source={tabViewImg}/>
            <Text style={styles.itemText}>Tab View</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Text')}
            style={styles.item}
          >
            <Image source={textImg}/>
            <Text style={styles.itemText}>Text</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Toggle')}
            style={styles.item}
          >
            <Image source={toggleImg}/>
            <Text style={styles.itemText}>Toggle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Tooltip')}
            style={styles.item}
          >
            <Image source={tooltipImg}/>
            <Text style={styles.itemText}>Tooltip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Top Navigation')}
            style={styles.item}
          >
            <Image source={topNavImg}/>
            <Text style={styles.itemText}>Top Navigation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Badges')}
            style={styles.item}
          >
            <Image source={badgesImg}/>
            <Text style={styles.itemText}>Badges</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
    flexWrap: 'wrap'
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.primary,
    fontFamily: fonts.primary,
  },
  itemImage: {
    height: 35,
    tintColor: colors.primary,
  },
});
