import React from 'react';
import classnames from 'classnames';
import FieldWrapper from './FieldWrapper';

const InputField = (props) => {
	const { input, label, type, ...rest } = props;

	return (
		<FieldWrapper
			hideUnderline={true}
			className={classnames('checkfield-wrapper', 'd-flex', 'flex-column')}
			type={type}
			{...rest}
		>
			<div className={classnames('checkfield-input-wrapper', 'd-flex')}>
				<input type={type} {...input} className="checkfield-input" />
				<div className="checkfield-label field-label">{label}</div>
			</div>
		</FieldWrapper>
	);
};

export default InputField;
