/**
 * Import styles
 */
import './styles/style.scss';
import './styles/editor.scss';

/**
 * Import block dependencies and components
 */
import assign from 'lodash.assign';
import classnames from 'classnames';
import animationAttr from './data/attributes';
import Inspector from './components/inspector';

/**
 * Extend addFilter
 */
const { addFilter } = wp.hooks;

/**
 * Register elements
 */
const { Fragment, createHigherOrderComponent } = wp.element;

/**
 * Animation attributes
 *
 * @param {Object} Default block settings.
 * @return {Object} Filtered block settings.
 */
function addAttributes( settings ) {
	settings.attributes = assign( settings.attributes, animationAttr );
	return settings;
}

/**
 * Add new inspector control panel
 *
 * @param {function|component} BlockEdit component.
 * @return {string} Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { animation } = props.attributes;
		return (
			<Fragment>
				<Inspector { ...props } />
				<div className={'animated ' + animation}>
					<BlockEdit { ...props } />
				</div>
			</Fragment>
		);
	};
}, 'withInspectorControl' );

/**
 * Return a new wrapped component
 *
 * @param {Object} props applied to save element.
 * @param {Object} block type.
 * @param {Object} block attributes.
 * @return {Object} Extra props for the root element of the save function.
 */
function addAnimation(  props, blockType, attributes  ) {
	const { animation = '', customClass = '', delay, threshold, hideEl } = attributes;
	if (animation || customClass) {
		return Object.assign( props, { 
			className: classnames( props.className, { 'scroll-hide': hideEl } ), 
			"data-scroll-class": `${animation} ${customClass}`,
			"data-scroll-delay": delay,
			"data-scroll-threshold": threshold   
		} );
	} else {
		return props;
	}
}

/**
 * Filters
 */

addFilter( 'blocks.registerBlockType', 'animated-blocks/addAttributes', addAttributes );
addFilter( 'editor.BlockEdit', 'animated-blocks/withInspectorControl', withInspectorControl );
addFilter( 'blocks.getSaveContent.extraProps', 'animated-blocks/addAnimation', addAnimation );
