import classNames from 'classnames';
import React from 'react';

import { TranslatedString } from '../../locale';
import { IconHelp } from '../../ui/icon';
import { TooltipTrigger } from '../../ui/tooltip';
import { CreditCardCodeTooltip } from '../creditCard';

export interface MollieCustomCardFormProps {
    options: {
        cardNumberElementOptions: {
            containerId: string;
        };
        cardExpiryElementOptions: {
            containerId: string;
        };
        cardCvcElementOptions: {
            containerId: string;
        };
        cardHolderElementOptions: {
            containerId: string;
        };
    };

    isCreditCard: boolean;
}

const MollieCustomCardForm: React.FunctionComponent<MollieCustomCardFormProps> = ({ options, isCreditCard }) => (
    !isCreditCard ?
    <div />
    : (<div className="mollie-wrapper">
        <div className={ classNames('form-field' , 'mollie-full') }>
            <label className="mollie-label form-label optimizedCheckout-form-label" htmlFor={ options.cardNumberElementOptions.containerId }>
                <TranslatedString id="payment.credit_card_number_label" />
            </label>
            <div
                data-cse="CardNumber"
                id={ options.cardNumberElementOptions.containerId }
                tabIndex={ 1 }
            />
        </div>
        <div className={ classNames('form-field', 'mollie-full') }>
            <label className="mollie-label form-label optimizedCheckout-form-label" htmlFor={ options.cardHolderElementOptions.containerId }>
                <TranslatedString id="payment.credit_card_name_label" />
            </label>
            <div
                data-cse="CardHolder"
                id={ options.cardHolderElementOptions.containerId }
                tabIndex={ 2 }
            />
        </div>
        <div className={ classNames('form-field' , 'mollie-aside', 'mollie-paddingRight') }>
            <label className="mollie-label form-label" htmlFor={ options.cardCvcElementOptions.containerId }>
                <TranslatedString id="payment.credit_card_cvv_label" />
                <TooltipTrigger
                    placement="top-start"
                    tooltip={ <CreditCardCodeTooltip /> }
                >
                    <span className="has-tip">
                        <IconHelp />
                    </span>
                </TooltipTrigger>
            </label>
            <div
                data-cse="SecurityCode"
                id={ options.cardCvcElementOptions.containerId }
                tabIndex={ 3 }
            />
        </div>
        <div className={ classNames('form-field' , 'mollie-aside') }>
            <label className="mollie-label form-label optimizedCheckout-form-label" htmlFor={ options.cardExpiryElementOptions.containerId }>
                <TranslatedString id="payment.credit_card_expiration_label" />
            </label>
            <div
                data-cse="ExpiryDate"
                id={ options.cardExpiryElementOptions.containerId }
                tabIndex={ 4 }
            />
        </div>
    </div>)
);

export default MollieCustomCardForm;
