// Import styles
import "./styles/style.scss";

// Import block dependencies and components
import classnames from "classnames";
import { animations } from "./animations";

// WordPress dependencies
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.editor;
const {
  PanelBody,
  PanelRow,
  TextControl,
  SelectControl,
  ToggleControl,
  RangeControl,
  Autocomplete
} = wp.components;
const { Fragment } = wp.element;

// Block attributes
const blockAttributes = {
  animation: {
    type: "string"
  },
  customClass: {
    type: "string"
  },
  delay: {
    type: "number",
    default: 0
  },
  threshold: {
    type: "number",
    default: 50
  },
  hideEl: {
    type: "boolean",
    default: false
  }
};

/**
 * Register: Animated Block
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name
 * @param  {Object}   settings Block settings
 */
registerBlockType("ab/animate", {
  title: __("Animated Block"),
  icon: "controls-play",
  category: "layout",
  attributes: blockAttributes,
  description: __(
    "Add whatever content blocks you'd like inside the animated block."
  ),

  /**
   * Define the edit interface
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit({ attributes, setAttributes, className }) {
    const { animation = "", customClass = "", delay, threshold, hideEl } = attributes;

    const onSelectDelay = value => {
      if (!value) {
        setAttributes({ delay: 0 });
        return;
      }
      setAttributes({ delay: parseInt(value, 10) });
    };

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody>
            <SelectControl
              label={__("Animation")}
              value={animation}
              options={animations}
              onChange={value => setAttributes({ animation: value })}
            />

            <TextControl
              label={__("Custom Animation / CSS Class")}
              value={customClass}
              onChange={value => setAttributes({ customClass: value })}
            />

            <TextControl
              label={__("Animation Delay (ms)")}
              value={delay}
              onChange={onSelectDelay}
            />

            <RangeControl
              label={__("Threshold")}
              value={threshold}
              onChange={value => setAttributes({ threshold: value })}
              min={1}
              max={100}
            />

            <ToggleControl
              label={__("Set to 0 opacity")}
              checked={hideEl}
              onChange={value => setAttributes({ hideEl: value })}
            />
          </PanelBody>
        </InspectorControls>

        <div className={classnames(className, "animated", animation)}>
          <InnerBlocks />
        </div>
      </Fragment>
    );
  },

  /**
   * Define the final markup
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  save({ attributes, className }) {
    const { animation = "", customClass = "", delay, threshold, hideEl } = attributes;

    return (
      <div
        className={classnames(className, { "scroll-hide": hideEl })}
        data-scroll-class={`${animation} ${customClass}`}
        data-scroll-delay={delay}
        data-scroll-threshold={threshold}
      >
        <InnerBlocks.Content />
      </div>
    );
  }
});
