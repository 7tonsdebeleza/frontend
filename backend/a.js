base: data.transaction


    code: code._text,
    date: date._text,
    reference: reference._text,
    status: status._text,
    paymentMethod: paymentMethod.type._text,
    grossAmount: grossAmount._text,
    discountAmount: discountAmount._text,

    intermediationRateAmount: creditorFees.intermediationRateAmount._text,
    intermediationFeeAmount: creditorFees.intermediationFeeAmount._text,
    
    netAmount: netAmount._text,
    extraAmount: extraAmount._text,
    installmentCount: installmentCount._text,
    itemCount: itemCount._text,

    senderName: sender.name._text,
    senderEmail: sender.email._text,
    
    senderPhoneAreaCode: sender.phone.areaCode._text,
    senderPhoneNumber: sender.phone.number._text,

    shippingStreet: shipping.address.street._text,
    shippingNumber: shipping.address.number._text,
    shippingComplement: shipping.address.complement._text,
    shippingDistrict: shipping.address.district._text,
    shippingCity: shipping.address.city._text,
    shippingState: shipping.address.state._text,
    shippingCountry: shipping.address.country._text,
    shippingPostalCode: shipping.address.postalCode._text,
    shippingCost: shipping.cost._text,