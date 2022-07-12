// @ts-ignore
import WheelPicker from './src/WheelPicker'
// @ts-ignore
import TimePicker from './src/TimePicker'
// @ts-ignore
import DatePicker from './src/DatePicker'

import { Picker, PickerIOS } from "@react-native-picker/picker";

import { StyleProp, TextStyle } from "react-native";

type ItemValue = number | string;

interface PickerItemProps<T = ItemValue> {
  label?: string;
  value?: T;
  color?: string;
  fontFamily?: string;
  testID?: string;
  /**
   * Style to apply to individual item labels.
   * Only following values take effect:
   *   - 'color'
   *   - 'backgroundColor'
   *   - 'fontSize'
   *   - 'fontFamily'
   *
   * @platform android
   */
  style?: StyleProp<TextStyle>;
  /**
   * If set to false, the specific item will be disabled, i.e. the user will not be able to make a
   * selection.
   * @default true
   * @platform android | web
   */
  enabled?: boolean;
}

export { WheelPicker, TimePicker, DatePicker, Picker, PickerIOS, PickerItemProps, ItemValue }
