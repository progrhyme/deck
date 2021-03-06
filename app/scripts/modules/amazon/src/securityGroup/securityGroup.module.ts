import { module } from 'angular';

import { AWS_SECURITY_GROUP_READER } from './securityGroup.reader';
import { INGRESS_RULE_GROUP_SELECTOR_COMPONENT } from './configure/ingressRuleGroupSelector.component';
import { AMAZON_SECURITYGROUP_CLONE_CLONESECURITYGROUP_CONTROLLER } from './clone/cloneSecurityGroup.controller';
import { AMAZON_SECURITYGROUP_CONFIGURE_CONFIGSECURITYGROUP_MIXIN_CONTROLLER } from './configure/configSecurityGroup.mixin.controller';
import { AMAZON_SECURITYGROUP_CONFIGURE_CREATESECURITYGROUPCTRL } from './configure/CreateSecurityGroupCtrl';
import { AMAZON_SECURITYGROUP_CONFIGURE_EDITSECURITYGROUPCTRL } from './configure/EditSecurityGroupCtrl';
import { AMAZON_SECURITYGROUP_DETAILS_SECURITYGROUPDETAIL_CONTROLLER } from './details/securityGroupDetail.controller';
import { AMAZON_SECURITYGROUP_SECURITYGROUP_TRANSFORMER } from './securityGroup.transformer';
import { AWS_SECURITY_GROUP_IP_RANGE_RULES } from './details/securityGroupIpRangeRules.component';
import { AWS_SECURITY_GROUP_ADDITIONAL_IP_RULES } from 'amazon/securityGroup/configure/additionalIpRules.component';

export const AWS_SECURITY_GROUP_MODULE = 'spinnaker.amazon.securityGroup';
module(AWS_SECURITY_GROUP_MODULE, [
  AWS_SECURITY_GROUP_READER,
  AMAZON_SECURITYGROUP_CLONE_CLONESECURITYGROUP_CONTROLLER,
  INGRESS_RULE_GROUP_SELECTOR_COMPONENT,
  AMAZON_SECURITYGROUP_CONFIGURE_CONFIGSECURITYGROUP_MIXIN_CONTROLLER,
  AMAZON_SECURITYGROUP_CONFIGURE_CREATESECURITYGROUPCTRL,
  AMAZON_SECURITYGROUP_CONFIGURE_EDITSECURITYGROUPCTRL,
  AMAZON_SECURITYGROUP_DETAILS_SECURITYGROUPDETAIL_CONTROLLER,
  AMAZON_SECURITYGROUP_SECURITYGROUP_TRANSFORMER,
  AWS_SECURITY_GROUP_IP_RANGE_RULES,
  AWS_SECURITY_GROUP_ADDITIONAL_IP_RULES,
]);
